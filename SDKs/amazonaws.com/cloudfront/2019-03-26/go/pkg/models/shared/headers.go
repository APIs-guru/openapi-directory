package shared

// Headers
// <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
type Headers struct {
	Items    []string
	Quantity int64
}
