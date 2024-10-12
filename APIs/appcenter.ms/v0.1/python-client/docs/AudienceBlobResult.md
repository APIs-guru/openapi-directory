# AudienceBlobResult

Audience definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Location of the audience blob. | [optional] 

## Example

```python
from openapi_client.models.audience_blob_result import AudienceBlobResult

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceBlobResult from a JSON string
audience_blob_result_instance = AudienceBlobResult.from_json(json)
# print the JSON string representation of the object
print(AudienceBlobResult.to_json())

# convert the object into a dict
audience_blob_result_dict = audience_blob_result_instance.to_dict()
# create an instance of AudienceBlobResult from a dict
audience_blob_result_from_dict = AudienceBlobResult.from_dict(audience_blob_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


