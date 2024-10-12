# JobOutputAsset

Represents an Asset used as a JobOutput.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_name** | **str** | The name of the output Asset. | 

## Example

```python
from openapi_client.models.job_output_asset import JobOutputAsset

# TODO update the JSON string below
json = "{}"
# create an instance of JobOutputAsset from a JSON string
job_output_asset_instance = JobOutputAsset.from_json(json)
# print the JSON string representation of the object
print(JobOutputAsset.to_json())

# convert the object into a dict
job_output_asset_dict = job_output_asset_instance.to_dict()
# create an instance of JobOutputAsset from a dict
job_output_asset_from_dict = JobOutputAsset.from_dict(job_output_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


