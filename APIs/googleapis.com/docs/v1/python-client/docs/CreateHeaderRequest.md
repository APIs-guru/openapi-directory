# CreateHeaderRequest

Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**section_break_location** | [**Location**](Location.md) |  | [optional] 
**type** | **str** | The type of header to create. | [optional] 

## Example

```python
from openapi_client.models.create_header_request import CreateHeaderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateHeaderRequest from a JSON string
create_header_request_instance = CreateHeaderRequest.from_json(json)
# print the JSON string representation of the object
print(CreateHeaderRequest.to_json())

# convert the object into a dict
create_header_request_dict = create_header_request_instance.to_dict()
# create an instance of CreateHeaderRequest from a dict
create_header_request_from_dict = CreateHeaderRequest.from_dict(create_header_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


