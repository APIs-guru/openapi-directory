# ShareRelationshipsOwnerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the owner. | [optional] 
**type** | **str** | Type is user. | [optional] 

## Example

```python
from openapi_client.models.share_relationships_owner_data import ShareRelationshipsOwnerData

# TODO update the JSON string below
json = "{}"
# create an instance of ShareRelationshipsOwnerData from a JSON string
share_relationships_owner_data_instance = ShareRelationshipsOwnerData.from_json(json)
# print the JSON string representation of the object
print(ShareRelationshipsOwnerData.to_json())

# convert the object into a dict
share_relationships_owner_data_dict = share_relationships_owner_data_instance.to_dict()
# create an instance of ShareRelationshipsOwnerData from a dict
share_relationships_owner_data_from_dict = ShareRelationshipsOwnerData.from_dict(share_relationships_owner_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


