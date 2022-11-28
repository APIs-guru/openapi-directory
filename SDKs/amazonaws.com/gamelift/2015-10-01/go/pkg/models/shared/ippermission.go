package shared

// IPPermission
// <p>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetPortSettings</a> </p>
type IPPermission struct {
	FromPort int64          `json:"FromPort"`
	IPRange  string         `json:"IpRange"`
	Protocol IPProtocolEnum `json:"Protocol"`
	ToPort   int64          `json:"ToPort"`
}
