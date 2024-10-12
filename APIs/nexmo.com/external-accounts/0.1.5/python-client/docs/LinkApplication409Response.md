# LinkApplication409Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | The account reached limit of maximum number of linked applications. (The only one application is allowed per an account) | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.link_application409_response import LinkApplication409Response

# TODO update the JSON string below
json = "{}"
# create an instance of LinkApplication409Response from a JSON string
link_application409_response_instance = LinkApplication409Response.from_json(json)
# print the JSON string representation of the object
print(LinkApplication409Response.to_json())

# convert the object into a dict
link_application409_response_dict = link_application409_response_instance.to_dict()
# create an instance of LinkApplication409Response from a dict
link_application409_response_from_dict = LinkApplication409Response.from_dict(link_application409_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


