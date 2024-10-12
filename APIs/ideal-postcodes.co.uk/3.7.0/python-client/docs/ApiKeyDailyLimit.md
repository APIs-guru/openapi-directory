# ApiKeyDailyLimit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumed** | **int** | Number of lookups performed today which count towards your daily limit. | 
**limit** | **int** | &#x60;number&#x60; or &#x60;null&#x60;. The daily lookup limit currently set on your key.  &#x60;null&#x60; means the limit is currently disabled. | 

## Example

```python
from openapi_client.models.api_key_daily_limit import ApiKeyDailyLimit

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyDailyLimit from a JSON string
api_key_daily_limit_instance = ApiKeyDailyLimit.from_json(json)
# print the JSON string representation of the object
print(ApiKeyDailyLimit.to_json())

# convert the object into a dict
api_key_daily_limit_dict = api_key_daily_limit_instance.to_dict()
# create an instance of ApiKeyDailyLimit from a dict
api_key_daily_limit_from_dict = ApiKeyDailyLimit.from_dict(api_key_daily_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


