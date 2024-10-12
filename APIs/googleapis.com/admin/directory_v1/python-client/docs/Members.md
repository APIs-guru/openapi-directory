# Members


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#members']
**members** | [**List[Member]**](Member.md) | A list of member objects. | [optional] 
**next_page_token** | **str** | Token used to access next page of this result. | [optional] 

## Example

```python
from openapi_client.models.members import Members

# TODO update the JSON string below
json = "{}"
# create an instance of Members from a JSON string
members_instance = Members.from_json(json)
# print the JSON string representation of the object
print(Members.to_json())

# convert the object into a dict
members_dict = members_instance.to_dict()
# create an instance of Members from a dict
members_from_dict = Members.from_dict(members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


