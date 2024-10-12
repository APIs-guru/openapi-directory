# AirportInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_iata_code** | **str** | Three character IATA airport code. This is a required field for &#x60;origin&#x60; and &#x60;destination&#x60;. Eg: \&quot;SFO\&quot; | [optional] 
**airport_name_override** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**gate** | **str** | A name of the gate. Eg: \&quot;B59\&quot; or \&quot;59\&quot; | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#airportInfo\&quot;&#x60;. | [optional] 
**terminal** | **str** | Terminal name. Eg: \&quot;INTL\&quot; or \&quot;I\&quot; | [optional] 

## Example

```python
from openapi_client.models.airport_info import AirportInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AirportInfo from a JSON string
airport_info_instance = AirportInfo.from_json(json)
# print the JSON string representation of the object
print(AirportInfo.to_json())

# convert the object into a dict
airport_info_dict = airport_info_instance.to_dict()
# create an instance of AirportInfo from a dict
airport_info_from_dict = AirportInfo.from_dict(airport_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


