# ListAttributeMetadataResponse

Response for AttributesService.ListAttributeMetadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_metadata** | [**List[AttributeMetadata]**](AttributeMetadata.md) | A collection of attribute metadata for the available attributes. | [optional] 
**next_page_token** | **str** | If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to &#x60;attributes.list&#x60;. If there are no more attributes, this field will not be present in the response. | [optional] 

## Example

```python
from openapi_client.models.list_attribute_metadata_response import ListAttributeMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAttributeMetadataResponse from a JSON string
list_attribute_metadata_response_instance = ListAttributeMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(ListAttributeMetadataResponse.to_json())

# convert the object into a dict
list_attribute_metadata_response_dict = list_attribute_metadata_response_instance.to_dict()
# create an instance of ListAttributeMetadataResponse from a dict
list_attribute_metadata_response_from_dict = ListAttributeMetadataResponse.from_dict(list_attribute_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


