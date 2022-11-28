package shared

// Alias
// A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>.
type Alias struct {
	Lifecycle *AliasLifecycleEnum `json:"Lifecycle,omitempty"`
	Name      *string             `json:"Name,omitempty"`
}
