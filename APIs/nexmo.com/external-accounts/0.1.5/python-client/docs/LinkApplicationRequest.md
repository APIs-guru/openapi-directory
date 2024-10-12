# LinkApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **str** | There is just one application allowed per an account. The application type must be type \&quot;messages\&quot;. For more information please see [Application API Spec](https://developer.nexmo.com/api/application.v2) | 

## Example

```python
from openapi_client.models.link_application_request import LinkApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LinkApplicationRequest from a JSON string
link_application_request_instance = LinkApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(LinkApplicationRequest.to_json())

# convert the object into a dict
link_application_request_dict = link_application_request_instance.to_dict()
# create an instance of LinkApplicationRequest from a dict
link_application_request_from_dict = LinkApplicationRequest.from_dict(link_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


