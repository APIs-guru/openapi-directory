# APIPagedResponseMetadata

Metadata for the paged response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The number of entities this paged response is limited to. | [readonly] 
**offset** | **int** | The number of entities prior to this page of items. | [readonly] 
**total_count** | **int** | The total number of entities matching the request. | [readonly] 

## Example

```python
from openapi_client.models.api_paged_response_metadata import APIPagedResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseMetadata from a JSON string
api_paged_response_metadata_instance = APIPagedResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseMetadata.to_json())

# convert the object into a dict
api_paged_response_metadata_dict = api_paged_response_metadata_instance.to_dict()
# create an instance of APIPagedResponseMetadata from a dict
api_paged_response_metadata_from_dict = APIPagedResponseMetadata.from_dict(api_paged_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


