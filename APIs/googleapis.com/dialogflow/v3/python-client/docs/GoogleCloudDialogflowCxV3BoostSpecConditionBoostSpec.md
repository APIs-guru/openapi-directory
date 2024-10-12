# GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec

Boost applies to documents which match a condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost** | **float** | Optional. Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. | [optional] 
**condition** | **str** | Optional. An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. Examples: * To boost documents with document ID \&quot;doc_1\&quot; or \&quot;doc_2\&quot;, and color \&quot;Red\&quot; or \&quot;Blue\&quot;: * (id: ANY(\&quot;doc_1\&quot;, \&quot;doc_2\&quot;)) AND (color: ANY(\&quot;Red\&quot;,\&quot;Blue\&quot;)) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_boost_spec_condition_boost_spec import GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec from a JSON string
google_cloud_dialogflow_cx_v3_boost_spec_condition_boost_spec_instance = GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_boost_spec_condition_boost_spec_dict = google_cloud_dialogflow_cx_v3_boost_spec_condition_boost_spec_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec from a dict
google_cloud_dialogflow_cx_v3_boost_spec_condition_boost_spec_from_dict = GoogleCloudDialogflowCxV3BoostSpecConditionBoostSpec.from_dict(google_cloud_dialogflow_cx_v3_boost_spec_condition_boost_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


