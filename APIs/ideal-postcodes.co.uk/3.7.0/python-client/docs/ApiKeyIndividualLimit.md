# ApiKeyIndividualLimit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | &#x60;number&#x60; or &#x60;null&#x60; Limit set on the number of lookups that can be  performed from a single IP address. &#x60;null&#x60; means the limit is currently  disabled. | 

## Example

```python
from openapi_client.models.api_key_individual_limit import ApiKeyIndividualLimit

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyIndividualLimit from a JSON string
api_key_individual_limit_instance = ApiKeyIndividualLimit.from_json(json)
# print the JSON string representation of the object
print(ApiKeyIndividualLimit.to_json())

# convert the object into a dict
api_key_individual_limit_dict = api_key_individual_limit_instance.to_dict()
# create an instance of ApiKeyIndividualLimit from a dict
api_key_individual_limit_from_dict = ApiKeyIndividualLimit.from_dict(api_key_individual_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


