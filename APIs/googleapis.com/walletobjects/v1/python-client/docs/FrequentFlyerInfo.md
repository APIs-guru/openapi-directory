# FrequentFlyerInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequent_flyer_number** | **str** | Frequent flyer number. Required for each nested object of kind &#x60;walletobjects#frequentFlyerInfo&#x60;. | [optional] 
**frequent_flyer_program_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#frequentFlyerInfo\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.frequent_flyer_info import FrequentFlyerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FrequentFlyerInfo from a JSON string
frequent_flyer_info_instance = FrequentFlyerInfo.from_json(json)
# print the JSON string representation of the object
print(FrequentFlyerInfo.to_json())

# convert the object into a dict
frequent_flyer_info_dict = frequent_flyer_info_instance.to_dict()
# create an instance of FrequentFlyerInfo from a dict
frequent_flyer_info_from_dict = FrequentFlyerInfo.from_dict(frequent_flyer_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


