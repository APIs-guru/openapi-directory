# LicenseeEditableDaily


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **float** | The maximum number of lookups this licensee can perform in a day. &#x60;null&#x60; indicates the limit is not active | [optional] 

## Example

```python
from openapi_client.models.licensee_editable_daily import LicenseeEditableDaily

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseeEditableDaily from a JSON string
licensee_editable_daily_instance = LicenseeEditableDaily.from_json(json)
# print the JSON string representation of the object
print(LicenseeEditableDaily.to_json())

# convert the object into a dict
licensee_editable_daily_dict = licensee_editable_daily_instance.to_dict()
# create an instance of LicenseeEditableDaily from a dict
licensee_editable_daily_from_dict = LicenseeEditableDaily.from_dict(licensee_editable_daily_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


