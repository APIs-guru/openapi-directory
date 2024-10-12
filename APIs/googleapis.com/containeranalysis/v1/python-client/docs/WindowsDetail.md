# WindowsDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpe_uri** | **str** | Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. | [optional] 
**description** | **str** | The description of this vulnerability. | [optional] 
**fixing_kbs** | [**List[KnowledgeBase]**](KnowledgeBase.md) | Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix. | [optional] 
**name** | **str** | Required. The name of this vulnerability. | [optional] 

## Example

```python
from openapi_client.models.windows_detail import WindowsDetail

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsDetail from a JSON string
windows_detail_instance = WindowsDetail.from_json(json)
# print the JSON string representation of the object
print(WindowsDetail.to_json())

# convert the object into a dict
windows_detail_dict = windows_detail_instance.to_dict()
# create an instance of WindowsDetail from a dict
windows_detail_from_dict = WindowsDetail.from_dict(windows_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


