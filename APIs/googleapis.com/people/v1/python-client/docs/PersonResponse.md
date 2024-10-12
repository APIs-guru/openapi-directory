# PersonResponse

The response for a single person

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_status_code** | **int** | **DEPRECATED** (Please use status instead) [HTTP 1.1 status code] (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). | [optional] 
**person** | [**Person**](Person.md) |  | [optional] 
**requested_resource_name** | **str** | The original requested resource name. May be different than the resource name on the returned person. The resource name can change when adding or removing fields that link a contact and profile such as a verified email, verified phone number, or a profile URL. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.person_response import PersonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PersonResponse from a JSON string
person_response_instance = PersonResponse.from_json(json)
# print the JSON string representation of the object
print(PersonResponse.to_json())

# convert the object into a dict
person_response_dict = person_response_instance.to_dict()
# create an instance of PersonResponse from a dict
person_response_from_dict = PersonResponse.from_dict(person_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


