# Dictlayerdata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**DictlayerdataCommon**](DictlayerdataCommon.md) |  | [optional] 
**dict** | [**DictlayerdataDict**](DictlayerdataDict.md) |  | [optional] 
**kind** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.dictlayerdata import Dictlayerdata

# TODO update the JSON string below
json = "{}"
# create an instance of Dictlayerdata from a JSON string
dictlayerdata_instance = Dictlayerdata.from_json(json)
# print the JSON string representation of the object
print(Dictlayerdata.to_json())

# convert the object into a dict
dictlayerdata_dict = dictlayerdata_instance.to_dict()
# create an instance of Dictlayerdata from a dict
dictlayerdata_from_dict = Dictlayerdata.from_dict(dictlayerdata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


