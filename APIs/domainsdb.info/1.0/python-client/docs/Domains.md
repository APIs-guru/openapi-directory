# Domains


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a** | **List[str]** |  | [optional] 
**cname** | **List[str]** |  | [optional] 
**mx** | [**List[MXRecords]**](MXRecords.md) |  | [optional] 
**ns** | **List[str]** |  | [optional] 
**txt** | **List[str]** |  | [optional] 
**country** | **str** | Hosting Country | [optional] 
**create_date** | **datetime** | Domain creation date | [optional] 
**domain** | **str** | Domain name | [optional] 
**is_dead** | **str** | If Domain is Dead | [optional] 
**update_date** | **datetime** | Domain last update date | [optional] 

## Example

```python
from openapi_client.models.domains import Domains

# TODO update the JSON string below
json = "{}"
# create an instance of Domains from a JSON string
domains_instance = Domains.from_json(json)
# print the JSON string representation of the object
print(Domains.to_json())

# convert the object into a dict
domains_dict = domains_instance.to_dict()
# create an instance of Domains from a dict
domains_from_dict = Domains.from_dict(domains_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


