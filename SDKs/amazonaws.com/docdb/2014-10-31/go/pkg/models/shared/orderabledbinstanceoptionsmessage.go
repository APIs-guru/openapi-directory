package shared

// OrderableDbInstanceOptionsMessage
// Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
type OrderableDbInstanceOptionsMessage struct {
	Marker                     *string
	OrderableDbInstanceOptions []OrderableDbInstanceOption
}
