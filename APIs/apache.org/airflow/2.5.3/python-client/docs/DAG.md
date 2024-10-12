# DAG

DAG

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_id** | **str** | The ID of the DAG. | [optional] [readonly] 
**default_view** | **str** | Default view of the DAG inside the webserver  *New in version 2.3.0*  | [optional] [readonly] 
**description** | **str** | User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents.  | [optional] [readonly] 
**file_token** | **str** | The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change.  | [optional] [readonly] 
**fileloc** | **str** | The absolute path to the file. | [optional] [readonly] 
**has_import_errors** | **bool** | Whether the DAG has import errors  *New in version 2.3.0*  | [optional] [readonly] 
**has_task_concurrency_limits** | **bool** | Whether the DAG has task concurrency limits  *New in version 2.3.0*  | [optional] [readonly] 
**is_active** | **bool** | Whether the DAG is currently seen by the scheduler(s).  *New in version 2.1.1*  *Changed in version 2.2.0*&amp;#58; Field is read-only.  | [optional] [readonly] 
**is_paused** | **bool** | Whether the DAG is paused. | [optional] 
**is_subdag** | **bool** | Whether the DAG is SubDAG. | [optional] [readonly] 
**last_expired** | **datetime** | Time when the DAG last received a refresh signal (e.g. the DAG&#39;s \&quot;refresh\&quot; button was clicked in the web UI)  *New in version 2.3.0*  | [optional] [readonly] 
**last_parsed_time** | **datetime** | The last time the DAG was parsed.  *New in version 2.3.0*  | [optional] [readonly] 
**last_pickled** | **datetime** | The last time the DAG was pickled.  *New in version 2.3.0*  | [optional] [readonly] 
**max_active_runs** | **int** | Maximum number of active DAG runs for the DAG  *New in version 2.3.0*  | [optional] [readonly] 
**max_active_tasks** | **int** | Maximum number of active tasks that can be run on the DAG  *New in version 2.3.0*  | [optional] [readonly] 
**next_dagrun** | **datetime** | The logical date of the next dag run.  *New in version 2.3.0*  | [optional] [readonly] 
**next_dagrun_create_after** | **datetime** | Earliest time at which this &#x60;&#x60;next_dagrun&#x60;&#x60; can be created.  *New in version 2.3.0*  | [optional] [readonly] 
**next_dagrun_data_interval_end** | **datetime** | The end of the interval of the next dag run.  *New in version 2.3.0*  | [optional] [readonly] 
**next_dagrun_data_interval_start** | **datetime** | The start of the interval of the next dag run.  *New in version 2.3.0*  | [optional] [readonly] 
**owners** | **List[str]** |  | [optional] [readonly] 
**pickle_id** | **str** | Foreign key to the latest pickle_id  *New in version 2.3.0*  | [optional] [readonly] 
**root_dag_id** | **str** | If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null. | [optional] [readonly] 
**schedule_interval** | [**ScheduleInterval**](ScheduleInterval.md) |  | [optional] 
**scheduler_lock** | **bool** | Whether (one of) the scheduler is scheduling this DAG at the moment  *New in version 2.3.0*  | [optional] [readonly] 
**tags** | [**List[Tag]**](Tag.md) | List of tags. | [optional] [readonly] 
**timetable_description** | **str** | Timetable/Schedule Interval description.  *New in version 2.3.0*  | [optional] [readonly] 

## Example

```python
from openapi_client.models.dag import DAG

# TODO update the JSON string below
json = "{}"
# create an instance of DAG from a JSON string
dag_instance = DAG.from_json(json)
# print the JSON string representation of the object
print(DAG.to_json())

# convert the object into a dict
dag_dict = dag_instance.to_dict()
# create an instance of DAG from a dict
dag_from_dict = DAG.from_dict(dag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


