package shared

// StatusCodes
// Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.
type StatusCodes struct {
	Status2xx *int64
	Status3xx *int64
	Status4xx *int64
	Status5xx *int64
}
