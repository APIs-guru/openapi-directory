# StoreCluster

Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of this cluster. Assigned by the server. Immutable once assigned. | [optional] 
**name** | [**List[LocalizedText]**](LocalizedText.md) | Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry. | [optional] 
**order_in_page** | **str** | String (US-ASCII only) used to determine order of this cluster within the parent page&#39;s elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters. | [optional] 
**product_id** | **List[str]** | List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster. | [optional] 

## Example

```python
from openapi_client.models.store_cluster import StoreCluster

# TODO update the JSON string below
json = "{}"
# create an instance of StoreCluster from a JSON string
store_cluster_instance = StoreCluster.from_json(json)
# print the JSON string representation of the object
print(StoreCluster.to_json())

# convert the object into a dict
store_cluster_dict = store_cluster_instance.to_dict()
# create an instance of StoreCluster from a dict
store_cluster_from_dict = StoreCluster.from_dict(store_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


