# MultisliceParams

Parameters to specify for multislice QueuedResource requests. This message must be populated in case of multislice requests instead of node_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_count** | **int** | Required. Number of nodes with this spec. The system will attempt to provison \&quot;node_count\&quot; nodes as part of the request. This needs to be &gt; 1. | [optional] 
**node_id_prefix** | **str** | Optional. Prefix of node_ids in case of multislice request. Should follow the &#x60;^[A-Za-z0-9_.~+%-]+$&#x60; regex format. If node_count &#x3D; 3 and node_id_prefix &#x3D; \&quot;np\&quot;, node ids of nodes created will be \&quot;np-0\&quot;, \&quot;np-1\&quot;, \&quot;np-2\&quot;. If this field is not provided we use queued_resource_id as the node_id_prefix. | [optional] 

## Example

```python
from openapi_client.models.multislice_params import MultisliceParams

# TODO update the JSON string below
json = "{}"
# create an instance of MultisliceParams from a JSON string
multislice_params_instance = MultisliceParams.from_json(json)
# print the JSON string representation of the object
print(MultisliceParams.to_json())

# convert the object into a dict
multislice_params_dict = multislice_params_instance.to_dict()
# create an instance of MultisliceParams from a dict
multislice_params_from_dict = MultisliceParams.from_dict(multislice_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


