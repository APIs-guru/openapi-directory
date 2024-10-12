# InsolvencyNotice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | [optional] 
**id** | **str** |  | [optional] 
**lastmod** | **datetime** |  | [optional] 
**publisher** | **str** |  | [optional] 
**reported_by** | **str** |  | [optional] 
**ruling** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.insolvency_notice import InsolvencyNotice

# TODO update the JSON string below
json = "{}"
# create an instance of InsolvencyNotice from a JSON string
insolvency_notice_instance = InsolvencyNotice.from_json(json)
# print the JSON string representation of the object
print(InsolvencyNotice.to_json())

# convert the object into a dict
insolvency_notice_dict = insolvency_notice_instance.to_dict()
# create an instance of InsolvencyNotice from a dict
insolvency_notice_from_dict = InsolvencyNotice.from_dict(insolvency_notice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


