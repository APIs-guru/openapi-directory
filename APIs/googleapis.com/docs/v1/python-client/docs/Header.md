# Header

A document header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[StructuralElement]**](StructuralElement.md) | The contents of the header. The indexes for a header&#39;s content begin at zero. | [optional] 
**header_id** | **str** | The ID of the header. | [optional] 

## Example

```python
from openapi_client.models.header import Header

# TODO update the JSON string below
json = "{}"
# create an instance of Header from a JSON string
header_instance = Header.from_json(json)
# print the JSON string representation of the object
print(Header.to_json())

# convert the object into a dict
header_dict = header_instance.to_dict()
# create an instance of Header from a dict
header_from_dict = Header.from_dict(header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


