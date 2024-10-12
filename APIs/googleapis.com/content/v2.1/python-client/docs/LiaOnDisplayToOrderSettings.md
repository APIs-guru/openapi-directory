# LiaOnDisplayToOrderSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_cost_policy_url** | **str** | Shipping cost and policy URL. | [optional] 
**status** | **str** | The status of the ?On display to order? feature. Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;inactive&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.lia_on_display_to_order_settings import LiaOnDisplayToOrderSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiaOnDisplayToOrderSettings from a JSON string
lia_on_display_to_order_settings_instance = LiaOnDisplayToOrderSettings.from_json(json)
# print the JSON string representation of the object
print(LiaOnDisplayToOrderSettings.to_json())

# convert the object into a dict
lia_on_display_to_order_settings_dict = lia_on_display_to_order_settings_instance.to_dict()
# create an instance of LiaOnDisplayToOrderSettings from a dict
lia_on_display_to_order_settings_from_dict = LiaOnDisplayToOrderSettings.from_dict(lia_on_display_to_order_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


