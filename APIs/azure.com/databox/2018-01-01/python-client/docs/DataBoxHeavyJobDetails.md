# DataBoxHeavyJobDetails

DataBoxHeavy Device Job Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_progress** | [**List[CopyProgress]**](CopyProgress.md) | Copy progress per account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_heavy_job_details import DataBoxHeavyJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxHeavyJobDetails from a JSON string
data_box_heavy_job_details_instance = DataBoxHeavyJobDetails.from_json(json)
# print the JSON string representation of the object
print(DataBoxHeavyJobDetails.to_json())

# convert the object into a dict
data_box_heavy_job_details_dict = data_box_heavy_job_details_instance.to_dict()
# create an instance of DataBoxHeavyJobDetails from a dict
data_box_heavy_job_details_from_dict = DataBoxHeavyJobDetails.from_dict(data_box_heavy_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


