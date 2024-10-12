# HDInsightAllOfProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Public IP address of the master node of the cluster. | [optional] 
**administrator_account** | [**VirtualMachineSshCredentials**](VirtualMachineSshCredentials.md) |  | [optional] 
**ssh_port** | **int** | Port open for ssh connections on the master node of the cluster. | [optional] 

## Example

```python
from openapi_client.models.hd_insight_all_of_properties import HDInsightAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HDInsightAllOfProperties from a JSON string
hd_insight_all_of_properties_instance = HDInsightAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(HDInsightAllOfProperties.to_json())

# convert the object into a dict
hd_insight_all_of_properties_dict = hd_insight_all_of_properties_instance.to_dict()
# create an instance of HDInsightAllOfProperties from a dict
hd_insight_all_of_properties_from_dict = HDInsightAllOfProperties.from_dict(hd_insight_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


