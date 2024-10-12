# DataBoxJobDetails

Databox Job Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_progress** | [**List[CopyProgress]**](CopyProgress.md) | Copy progress per storage account. | [optional] [readonly] 
**device_password** | **str** | Set Device password for unlocking Databox | [optional] 

## Example

```python
from openapi_client.models.data_box_job_details import DataBoxJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxJobDetails from a JSON string
data_box_job_details_instance = DataBoxJobDetails.from_json(json)
# print the JSON string representation of the object
print(DataBoxJobDetails.to_json())

# convert the object into a dict
data_box_job_details_dict = data_box_job_details_instance.to_dict()
# create an instance of DataBoxJobDetails from a dict
data_box_job_details_from_dict = DataBoxJobDetails.from_dict(data_box_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


