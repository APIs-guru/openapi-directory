# Schedule1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | A schedule must be &lt;strong&gt;enabled&lt;/strong&gt; to run. Specify &lt;strong&gt;enabled&lt;/strong&gt; to run the schedule or &lt;strong&gt;disabled&lt;/strong&gt; to turn off the schedule so that it doesn&#39;t run. | [optional] 

## Example

```python
from openapi_client.models.schedule1 import Schedule1

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule1 from a JSON string
schedule1_instance = Schedule1.from_json(json)
# print the JSON string representation of the object
print(Schedule1.to_json())

# convert the object into a dict
schedule1_dict = schedule1_instance.to_dict()
# create an instance of Schedule1 from a dict
schedule1_from_dict = Schedule1.from_dict(schedule1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


