# DictlayerdataDict


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**DictlayerdataDictSource**](DictlayerdataDictSource.md) |  | [optional] 
**words** | [**List[DictlayerdataDictWordsInner]**](DictlayerdataDictWordsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.dictlayerdata_dict import DictlayerdataDict

# TODO update the JSON string below
json = "{}"
# create an instance of DictlayerdataDict from a JSON string
dictlayerdata_dict_instance = DictlayerdataDict.from_json(json)
# print the JSON string representation of the object
print(DictlayerdataDict.to_json())

# convert the object into a dict
dictlayerdata_dict_dict = dictlayerdata_dict_instance.to_dict()
# create an instance of DictlayerdataDict from a dict
dictlayerdata_dict_from_dict = DictlayerdataDict.from_dict(dictlayerdata_dict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


