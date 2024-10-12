# ProductMetadata

Metadata about a long-running Product operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warning_messages** | **List[str]** | List of warnings related to the associated operation. | [optional] 

## Example

```python
from openapi_client.models.product_metadata import ProductMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ProductMetadata from a JSON string
product_metadata_instance = ProductMetadata.from_json(json)
# print the JSON string representation of the object
print(ProductMetadata.to_json())

# convert the object into a dict
product_metadata_dict = product_metadata_instance.to_dict()
# create an instance of ProductMetadata from a dict
product_metadata_from_dict = ProductMetadata.from_dict(product_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


