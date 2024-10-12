# Experiment

JSON template for Analytics experiment resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this experiment belongs. This field is read-only. | [optional] 
**created** | **datetime** | Time the experiment was created. This field is read-only. | [optional] 
**description** | **str** | Notes about this experiment. | [optional] 
**editable_in_ga_ui** | **bool** | If true, the end user will be able to edit the experiment via the Google Analytics user interface. | [optional] 
**end_time** | **datetime** | The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only. | [optional] 
**equal_weighting** | **bool** | Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED. | [optional] 
**id** | **str** | Experiment ID. Required for patch and update. Disallowed for create. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this experiment belongs. This field is read-only. | [optional] 
**kind** | **str** | Resource type for an Analytics experiment. This field is read-only. | [optional] [default to 'analytics#experiment']
**minimum_experiment_length_in_days** | **int** | An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. | [optional] 
**name** | **str** | Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment. | [optional] 
**objective_metric** | **str** | The metric that the experiment is optimizing. Valid values: \&quot;ga:goal(n)Completions\&quot;, \&quot;ga:adsenseAdsClicks\&quot;, \&quot;ga:adsenseAdsViewed\&quot;, \&quot;ga:adsenseRevenue\&quot;, \&quot;ga:bounces\&quot;, \&quot;ga:pageviews\&quot;, \&quot;ga:sessionDuration\&quot;, \&quot;ga:transactions\&quot;, \&quot;ga:transactionRevenue\&quot;. This field is required if status is \&quot;RUNNING\&quot; and servingFramework is one of \&quot;REDIRECT\&quot; or \&quot;API\&quot;. | [optional] 
**optimization_type** | **str** | Whether the objectiveMetric should be minimized or maximized. Possible values: \&quot;MAXIMUM\&quot;, \&quot;MINIMUM\&quot;. Optional--defaults to \&quot;MAXIMUM\&quot;. Cannot be specified without objectiveMetric. Cannot be modified when status is \&quot;RUNNING\&quot; or \&quot;ENDED\&quot;. | [optional] 
**parent_link** | [**ExperimentParentLink**](ExperimentParentLink.md) |  | [optional] 
**profile_id** | **str** | View (Profile) ID to which this experiment belongs. This field is read-only. | [optional] 
**reason_experiment_ended** | **str** | Why the experiment ended. Possible values: \&quot;STOPPED_BY_USER\&quot;, \&quot;WINNER_FOUND\&quot;, \&quot;EXPERIMENT_EXPIRED\&quot;, \&quot;ENDED_WITH_NO_WINNER\&quot;, \&quot;GOAL_OBJECTIVE_CHANGED\&quot;. \&quot;ENDED_WITH_NO_WINNER\&quot; means that the experiment didn&#39;t expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only. | [optional] 
**rewrite_variation_urls_as_original** | **bool** | Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED. | [optional] 
**self_link** | **str** | Link for this experiment. This field is read-only. | [optional] 
**serving_framework** | **str** | The framework used to serve the experiment variations and evaluate the results. One of:   - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results. - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation. - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results. | [optional] 
**snippet** | **str** | The snippet of code to include on the control page(s). This field is read-only. | [optional] 
**start_time** | **datetime** | The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only. | [optional] 
**status** | **str** | Experiment status. Possible values: \&quot;DRAFT\&quot;, \&quot;READY_TO_RUN\&quot;, \&quot;RUNNING\&quot;, \&quot;ENDED\&quot;. Experiments can be created in the \&quot;DRAFT\&quot;, \&quot;READY_TO_RUN\&quot; or \&quot;RUNNING\&quot; state. This field is required when creating an experiment. | [optional] 
**traffic_coverage** | **float** | A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. | [optional] 
**updated** | **datetime** | Time the experiment was last modified. This field is read-only. | [optional] 
**variations** | [**List[ExperimentVariationsInner]**](ExperimentVariationsInner.md) | Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING. | [optional] 
**web_property_id** | **str** | Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only. | [optional] 
**winner_confidence_level** | **float** | A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED. | [optional] 
**winner_found** | **bool** | Boolean specifying whether a winner has been found for this experiment. This field is read-only. | [optional] 

## Example

```python
from openapi_client.models.experiment import Experiment

# TODO update the JSON string below
json = "{}"
# create an instance of Experiment from a JSON string
experiment_instance = Experiment.from_json(json)
# print the JSON string representation of the object
print(Experiment.to_json())

# convert the object into a dict
experiment_dict = experiment_instance.to_dict()
# create an instance of Experiment from a dict
experiment_from_dict = Experiment.from_dict(experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


