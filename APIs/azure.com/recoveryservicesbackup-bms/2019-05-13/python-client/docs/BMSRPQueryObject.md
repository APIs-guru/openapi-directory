# BMSRPQueryObject

Filters to list backup copies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **datetime** | Backup copies created before this time. | [optional] 
**extended_info** | **bool** | In Get Recovery Point, it tells whether extended information about recovery point is asked. | [optional] 
**restore_point_query_type** | **str** | RestorePoint type | [optional] 
**start_date** | **datetime** | Backup copies created after this time. | [optional] 

## Example

```python
from openapi_client.models.bmsrp_query_object import BMSRPQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSRPQueryObject from a JSON string
bmsrp_query_object_instance = BMSRPQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSRPQueryObject.to_json())

# convert the object into a dict
bmsrp_query_object_dict = bmsrp_query_object_instance.to_dict()
# create an instance of BMSRPQueryObject from a dict
bmsrp_query_object_from_dict = BMSRPQueryObject.from_dict(bmsrp_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


