# ConvertJobDetails

Details regarding a Convert background job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Output only. AIP-160 based filter used to specify the entities to convert | [optional] [readonly] 

## Example

```python
from openapi_client.models.convert_job_details import ConvertJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertJobDetails from a JSON string
convert_job_details_instance = ConvertJobDetails.from_json(json)
# print the JSON string representation of the object
print(ConvertJobDetails.to_json())

# convert the object into a dict
convert_job_details_dict = convert_job_details_instance.to_dict()
# create an instance of ConvertJobDetails from a dict
convert_job_details_from_dict = ConvertJobDetails.from_dict(convert_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


