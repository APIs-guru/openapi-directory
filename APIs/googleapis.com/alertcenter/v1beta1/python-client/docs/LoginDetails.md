# LoginDetails

The details of the login action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | Optional. The human-readable IP address (for example, &#x60;11.22.33.44&#x60;) that is associated with the warning event. | [optional] 
**login_time** | **str** | Optional. The successful login time that is associated with the warning event. This isn&#39;t present for blocked login attempts. | [optional] 

## Example

```python
from openapi_client.models.login_details import LoginDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LoginDetails from a JSON string
login_details_instance = LoginDetails.from_json(json)
# print the JSON string representation of the object
print(LoginDetails.to_json())

# convert the object into a dict
login_details_dict = login_details_instance.to_dict()
# create an instance of LoginDetails from a dict
login_details_from_dict = LoginDetails.from_dict(login_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


