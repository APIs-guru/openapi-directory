# DataServerLicense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_left** | **str** |  | [optional] 
**amount_used** | **str** |  | [optional] 
**links** | [**DataServerLicenseLinks**](DataServerLicenseLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**total_amount** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_server_license import DataServerLicense

# TODO update the JSON string below
json = "{}"
# create an instance of DataServerLicense from a JSON string
data_server_license_instance = DataServerLicense.from_json(json)
# print the JSON string representation of the object
print(DataServerLicense.to_json())

# convert the object into a dict
data_server_license_dict = data_server_license_instance.to_dict()
# create an instance of DataServerLicense from a dict
data_server_license_from_dict = DataServerLicense.from_dict(data_server_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


