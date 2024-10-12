# JobInputAsset

Represents an Asset for input into a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_name** | **str** | The name of the input Asset. | 

## Example

```python
from openapi_client.models.job_input_asset import JobInputAsset

# TODO update the JSON string below
json = "{}"
# create an instance of JobInputAsset from a JSON string
job_input_asset_instance = JobInputAsset.from_json(json)
# print the JSON string representation of the object
print(JobInputAsset.to_json())

# convert the object into a dict
job_input_asset_dict = job_input_asset_instance.to_dict()
# create an instance of JobInputAsset from a dict
job_input_asset_from_dict = JobInputAsset.from_dict(job_input_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


