# BusinessDayConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_days** | **List[str]** | Regular business days, such as &#39;\&quot;monday\&quot;&#39;. May not be empty. | [optional] 

## Example

```python
from openapi_client.models.business_day_config import BusinessDayConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessDayConfig from a JSON string
business_day_config_instance = BusinessDayConfig.from_json(json)
# print the JSON string representation of the object
print(BusinessDayConfig.to_json())

# convert the object into a dict
business_day_config_dict = business_day_config_instance.to_dict()
# create an instance of BusinessDayConfig from a dict
business_day_config_from_dict = BusinessDayConfig.from_dict(business_day_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


