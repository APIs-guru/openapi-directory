# Metadata

Carries information about the pipeline execution that is returned in the long running operation's metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time at which the operation was created by the API. | [optional] 
**end_time** | **str** | The time at which execution was completed and resources were cleaned up. | [optional] 
**events** | [**List[Event]**](Event.md) | The list of events that have happened so far during the execution of this operation. | [optional] 
**labels** | **Dict[str, str]** | The user-defined labels associated with this operation. | [optional] 
**pipeline** | [**Pipeline**](Pipeline.md) |  | [optional] 
**pub_sub_topic** | **str** | The name of the Cloud Pub/Sub topic where notifications of operation status changes are sent. | [optional] 
**start_time** | **str** | The first time at which resources were allocated to execute the pipeline. | [optional] 

## Example

```python
from openapi_client.models.metadata import Metadata

# TODO update the JSON string below
json = "{}"
# create an instance of Metadata from a JSON string
metadata_instance = Metadata.from_json(json)
# print the JSON string representation of the object
print(Metadata.to_json())

# convert the object into a dict
metadata_dict = metadata_instance.to_dict()
# create an instance of Metadata from a dict
metadata_from_dict = Metadata.from_dict(metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


