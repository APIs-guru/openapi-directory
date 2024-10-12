# AuthorizationPropertiesFormat

Properties of ExpressRouteCircuitAuthorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_key** | **str** | The authorization key. | [optional] 
**authorization_use_status** | **str** | The authorization use status. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 

## Example

```python
from openapi_client.models.authorization_properties_format import AuthorizationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPropertiesFormat from a JSON string
authorization_properties_format_instance = AuthorizationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPropertiesFormat.to_json())

# convert the object into a dict
authorization_properties_format_dict = authorization_properties_format_instance.to_dict()
# create an instance of AuthorizationPropertiesFormat from a dict
authorization_properties_format_from_dict = AuthorizationPropertiesFormat.from_dict(authorization_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


