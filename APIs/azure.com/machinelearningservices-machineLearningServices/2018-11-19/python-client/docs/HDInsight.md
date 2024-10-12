# HDInsight

A HDInsight compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HDInsightAllOfProperties**](HDInsightAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.hd_insight import HDInsight

# TODO update the JSON string below
json = "{}"
# create an instance of HDInsight from a JSON string
hd_insight_instance = HDInsight.from_json(json)
# print the JSON string representation of the object
print(HDInsight.to_json())

# convert the object into a dict
hd_insight_dict = hd_insight_instance.to_dict()
# create an instance of HDInsight from a dict
hd_insight_from_dict = HDInsight.from_dict(hd_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


