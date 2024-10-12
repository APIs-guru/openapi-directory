# LinkApplication403Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | The application does not exist or the application type is not \&quot;messages\&quot; | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.link_application403_response import LinkApplication403Response

# TODO update the JSON string below
json = "{}"
# create an instance of LinkApplication403Response from a JSON string
link_application403_response_instance = LinkApplication403Response.from_json(json)
# print the JSON string representation of the object
print(LinkApplication403Response.to_json())

# convert the object into a dict
link_application403_response_dict = link_application403_response_instance.to_dict()
# create an instance of LinkApplication403Response from a dict
link_application403_response_from_dict = LinkApplication403Response.from_dict(link_application403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


