# AffinityInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_id** | **str** | You can pass the affinityId of a compute node to indicate that this task needs to run on that compute node. Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere. | 

## Example

```python
from openapi_client.models.affinity_information import AffinityInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AffinityInformation from a JSON string
affinity_information_instance = AffinityInformation.from_json(json)
# print the JSON string representation of the object
print(AffinityInformation.to_json())

# convert the object into a dict
affinity_information_dict = affinity_information_instance.to_dict()
# create an instance of AffinityInformation from a dict
affinity_information_from_dict = AffinityInformation.from_dict(affinity_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


