# XComCollection

Collection of XCom entries.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**xcom_entries** | [**List[XComCollectionItem]**](XComCollectionItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.x_com_collection import XComCollection

# TODO update the JSON string below
json = "{}"
# create an instance of XComCollection from a JSON string
x_com_collection_instance = XComCollection.from_json(json)
# print the JSON string representation of the object
print(XComCollection.to_json())

# convert the object into a dict
x_com_collection_dict = x_com_collection_instance.to_dict()
# create an instance of XComCollection from a dict
x_com_collection_from_dict = XComCollection.from_dict(x_com_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


