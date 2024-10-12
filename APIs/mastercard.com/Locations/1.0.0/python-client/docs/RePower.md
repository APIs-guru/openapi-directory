# RePower


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_swipe** | **bool** | Boolean value which indicates if the repower card load type at this merchant supports Card Swipe. | [optional] 
**money_pak** | **bool** | Boolean value which indicates if the repower card load type at this merchant supports MoneyPak. | [optional] 

## Example

```python
from openapi_client.models.re_power import RePower

# TODO update the JSON string below
json = "{}"
# create an instance of RePower from a JSON string
re_power_instance = RePower.from_json(json)
# print the JSON string representation of the object
print(RePower.to_json())

# convert the object into a dict
re_power_dict = re_power_instance.to_dict()
# create an instance of RePower from a dict
re_power_from_dict = RePower.from_dict(re_power_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


