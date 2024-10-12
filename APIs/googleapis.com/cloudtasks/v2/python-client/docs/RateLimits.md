# RateLimits

Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_burst_size** | **int** | Output only. The max burst size. Max burst size limits how fast tasks in queue are processed when many tasks are in the queue and the rate is high. This field allows the queue to have a high rate so processing starts shortly after a task is enqueued, but still limits resource usage when many tasks are enqueued in a short period of time. The [token bucket](https://wikipedia.org/wiki/Token_Bucket) algorithm is used to control the rate of task dispatches. Each queue has a token bucket that holds tokens, up to the maximum specified by &#x60;max_burst_size&#x60;. Each time a task is dispatched, a token is removed from the bucket. Tasks will be dispatched until the queue&#39;s bucket runs out of tokens. The bucket will be continuously refilled with new tokens based on max_dispatches_per_second. Cloud Tasks will pick the value of &#x60;max_burst_size&#x60; based on the value of max_dispatches_per_second. For queues that were created or updated using &#x60;queue.yaml/xml&#x60;, &#x60;max_burst_size&#x60; is equal to [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size). Since &#x60;max_burst_size&#x60; is output only, if UpdateQueue is called on a queue created by &#x60;queue.yaml/xml&#x60;, &#x60;max_burst_size&#x60; will be reset based on the value of max_dispatches_per_second, regardless of whether max_dispatches_per_second is updated.  | [optional] 
**max_concurrent_dispatches** | **int** | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of concurrent requests decreases. If unspecified when the queue is created, Cloud Tasks will pick the default. The maximum allowed value is 5,000. This field has the same meaning as [max_concurrent_requests in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests). | [optional] 
**max_dispatches_per_second** | **float** | The maximum rate at which tasks are dispatched from this queue. If unspecified when the queue is created, Cloud Tasks will pick the default. * The maximum allowed value is 500. This field has the same meaning as [rate in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate). | [optional] 

## Example

```python
from openapi_client.models.rate_limits import RateLimits

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimits from a JSON string
rate_limits_instance = RateLimits.from_json(json)
# print the JSON string representation of the object
print(RateLimits.to_json())

# convert the object into a dict
rate_limits_dict = rate_limits_instance.to_dict()
# create an instance of RateLimits from a dict
rate_limits_from_dict = RateLimits.from_dict(rate_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


