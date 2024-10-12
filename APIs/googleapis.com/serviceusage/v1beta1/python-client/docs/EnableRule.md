# EnableRule

The consumer policy rule that defines usable services and service groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_type** | **str** | Client and resource project enable type. | [optional] 
**groups** | **List[str]** | DEPRECATED: Please use field &#x60;values&#x60;. Service group should have prefix &#x60;groups/&#x60;. The names of the service groups that are enabled (Not Implemented). Example: &#x60;groups/googleServices&#x60;. | [optional] 
**services** | **List[str]** | DEPRECATED: Please use field &#x60;values&#x60;. Service should have prefix &#x60;services/&#x60;. The names of the services that are enabled. Example: &#x60;storage.googleapis.com&#x60;. | [optional] 
**values** | **List[str]** | The names of the services or service groups that are enabled. Example: &#x60;services/storage.googleapis.com&#x60;, &#x60;groups/googleServices&#x60;, &#x60;groups/allServices&#x60;. | [optional] 

## Example

```python
from openapi_client.models.enable_rule import EnableRule

# TODO update the JSON string below
json = "{}"
# create an instance of EnableRule from a JSON string
enable_rule_instance = EnableRule.from_json(json)
# print the JSON string representation of the object
print(EnableRule.to_json())

# convert the object into a dict
enable_rule_dict = enable_rule_instance.to_dict()
# create an instance of EnableRule from a dict
enable_rule_from_dict = EnableRule.from_dict(enable_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


