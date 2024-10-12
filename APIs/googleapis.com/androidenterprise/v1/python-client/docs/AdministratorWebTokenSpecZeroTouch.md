# AdministratorWebTokenSpecZeroTouch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether zero-touch embedded UI is usable with this token. If enabled, the admin can link zero-touch customers to this enterprise. | [optional] 

## Example

```python
from openapi_client.models.administrator_web_token_spec_zero_touch import AdministratorWebTokenSpecZeroTouch

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorWebTokenSpecZeroTouch from a JSON string
administrator_web_token_spec_zero_touch_instance = AdministratorWebTokenSpecZeroTouch.from_json(json)
# print the JSON string representation of the object
print(AdministratorWebTokenSpecZeroTouch.to_json())

# convert the object into a dict
administrator_web_token_spec_zero_touch_dict = administrator_web_token_spec_zero_touch_instance.to_dict()
# create an instance of AdministratorWebTokenSpecZeroTouch from a dict
administrator_web_token_spec_zero_touch_from_dict = AdministratorWebTokenSpecZeroTouch.from_dict(administrator_web_token_spec_zero_touch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


