# DistributionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[BuildsDistributeRequestDestinationsInner]**](BuildsDistributeRequestDestinationsInner.md) | Array of objects {id:string, type:string} with \&quot;id\&quot; being the distribution group ID, store ID, or tester email, and \&quot;type\&quot; being \&quot;group\&quot;, \&quot;store\&quot;, or \&quot;tester\&quot; | [optional] 
**mandatory_update** | **bool** |  | [optional] 
**notify_testers** | **bool** |  | [optional] [default to True]
**release_notes** | **str** | The release notes | [optional] 

## Example

```python
from openapi_client.models.distribution_request import DistributionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionRequest from a JSON string
distribution_request_instance = DistributionRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionRequest.to_json())

# convert the object into a dict
distribution_request_dict = distribution_request_instance.to_dict()
# create an instance of DistributionRequest from a dict
distribution_request_from_dict = DistributionRequest.from_dict(distribution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


